import { create } from "domain";

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





function createEmmptyCalendar() {
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

  let event = {
    // always required
    "DTSTAMP": dateToIcalsDate(new Date()), // timestamp of this object
    "UID": uid, // has to be unique

    // required if the method of the icals is not specified
    "DTSTART;VALUE=DATE": "20130101",
    "DESCRIPTION": "",

    // "optional" - will run without but it's gonna look ugly
    "SUMMARY": "", // this is the title

    // everything after this is considered optional, but it's useful to keep it here for reference
    // "DTEND;VALUE=DATE": "",
    // "DESCRIPTION": "",
    // "LOCATION": "",
    // "SEQUENCE": "",
    // "STATUS": "",
    // "TRANSP": ""
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
function generateIcasJson(OH_data) {
  console.log(OH_data)
  let mock_ics = createEmmptyCalendar()

  let mock_information = {
    "Start Date": dateToIcalsDate(new Date()),
    "Name": "Office Hours",
    "Description": "This is a description of an office hour happening"
  }
  let v_event = createEvent(mock_information)
  
  mock_ics.VCALENDAR[0].VEVENT.push(v_event)
  mock_information.Description = "Office Hours 2"
  mock_ics.VCALENDAR[0].VEVENT.push(createEvent(mock_information))
  mock_information.Description = "Office Hours 3"
  mock_ics.VCALENDAR[0].VEVENT.push(createEvent(mock_information))

  return mock_ics  
}


function generateCalendar(OH_data) {
const ics_json = generateIcasJson(OH_data)

var icalOutput = ical2json.revert(ics_json);
sessionStorage.setItem(process.env.FINAL_ICALS, icalOutput);
console.log(icalOutput)
return icalOutput
}

export default generateCalendar;



