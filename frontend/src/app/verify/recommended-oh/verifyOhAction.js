var ical2json = require("ical2json");
const { v4: uuidv4 } = require('uuid');
/**
Resources: 
RFC for icals:  https://datatracker.ietf.org/doc/html/rfc5545#section-3.6.1
RFC for icals:  https://www.rfc-editor.org/rfc/rfc5545#section-3.8.4.7

docs and example for converter: https://www.npmjs.com/package/ical2json

UID generation guidelines; 
put a combination of the current calendar date and time of day (i.e., formatted in as a DATE-TIME value)
along with some other currently unique (perhaps sequential) identifier available on the system 
(for example, a process id number).

**/



const DOMAIN_NAME = "@intelliagents.com"

function createEmptyCalendar() {
  return {
    "VCALENDAR": [
      {
        "PRODID": "-//Calendar Labs//Calendar 1.0//EN",
        "VERSION": "2.0",
        "METHOD":"PUBLISH",

        "VEVENT": []
      }
    ]
  }
}

// create empty event
function createEvent(json_event) {
  const uniqueID = uuidv4().replace(/-/g, '').slice(0, 6); // might not be unique but its ok since we are adding the date to it
  let uid = uniqueID + dateToIcalsDate(new Date()) +DOMAIN_NAME

  let startTime = json_event["Start Time"] 
    ? new Date(`${json_event["Start Date"]}T${json_event["Start Time"]}`) 
    : new Date(`${json_event["Start Date"]}T00:00:00`);
  let endTime = json_event["End Time"] 
    ? new Date(`${json_event["End Date"]}T${json_event["End Time"]}`) 
    : new Date(`${json_event["End Date"]}T00:00:00`);

  let event = {
    // always required
    "DTSTAMP": dateToIcalsDate(new Date()), // timestamp of this object
    "UID": uid, // has to be unique

    // required if the method of the icals is not specified
    "DTSTART": dateToIcalsDate(startTime), // start time of the event
    "DTEND": dateToIcalsDate(endTime), // end time of the event
    "DESCRIPTION": "",

    // "optional" - will run without but it's gonna look ugly
    "SUMMARY": `${`${json_event.syllabus} - ` || ""}${json_event["Name"] || ""}`, // this is the title
    "RRULE":json_event.RRULE, // this is the repeat rule - this is a weekly event

    // everything after this is considered optional, but it's useful to keep it here for reference
    // "DESCRIPTION": "",
    // "LOCATION": "",
    // "SEQUENCE": "",
    // "STATUS": "",
    // "TRANSP": ""
  }

  switch (json_event["RRULE"]) {
    case "FREQ=ONCE":
      delete event.RRULE
      break;
    default: // if its not once, then  it is a recurring event. 
    // change the end date so that it's start date + end time. 
      const until = `;UNTIL=${dateToIcalsDate(endTime)}`

      endTime = json_event["End Time"] 
      ? new Date(`${json_event["Start Date"]}T${json_event["End Time"]}`)
      : startTime

      event["DTEND"] = dateToIcalsDate(endTime)
      event["RRULE"] = json_event.RRULE + until
      break;
  }
  return event
}

function dateToIcalsDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  // iCalendar format: YYYYMMDDTHHMMSSZ
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}  

//todo: implement this
function generateIcalsJson(events) {
  let mock_ics = createEmptyCalendar()

  for (let i = 0; i < events.length; i++) {
    let event = createEvent(events[i])

    mock_ics.VCALENDAR[0].VEVENT.push(event)
  }
  return mock_ics  
}


function generateCalendar() {
  let events = sessionStorage.getItem(process.env.INITIAL_EVENTS_JSON);
  let office_hour_data = sessionStorage.getItem("office_hour_data");

  // todo: append OH and events together
  if (typeof office_hour_data === "string") {
    office_hour_data = JSON.parse(office_hour_data)
  }
  if (typeof events === "string") {
    events = JSON.parse(events)
  }

  if (Array.isArray(events) && Array.isArray(office_hour_data)) {
    events = events.concat(office_hour_data);
  }

  const ics_json = generateIcalsJson(events)

  var icalOutput = ical2json.revert(ics_json);
  sessionStorage.setItem(process.env.FINAL_ICALS, icalOutput);
  return icalOutput
}


async function returnAcceptedOH(OfficeHourData) {
   // send accepted OH data to backend

   OfficeHourData.map((item) => {
    return {
      uuid:item.uuid,
      reccurence_key:item.reccurence_key,
    }
    });

    console.log("OfficeHourData", OfficeHourData)

   const requestOptions = {
    method: "POST",
    body: JSON.stringify(OfficeHourData),
    redirect: "follow",
    signal: AbortSignal.timeout(10 * 1000),
    headers :{
      "Content-Type" : "application/json",
    }
};

try {
    const url = "https://intelliagents.ddns.net/webhook-test/recommended-oh";
    let res = await fetch(url, requestOptions)
    
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return true;


} catch (error) {
    console.error(error);
}
return false
}


export {generateCalendar, returnAcceptedOH};



