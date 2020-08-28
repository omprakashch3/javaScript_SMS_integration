# node-twilio-integration

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/56b0d6e266064776a6e4482c43185a59)](https://app.codacy.com/manual/naivedeveloper95/node-twilio-integration?utm_source=github.com&utm_medium=referral&utm_content=naivedeveloper95/node-twilio-integration&utm_campaign=Badge_Grade_Dashboard)
![Node.js CI](https://github.com/naivedeveloper95/node-twilio-integration/workflows/Node.js%20CI/badge.svg)
![CodeQL](https://github.com/naivedeveloper95/node-twilio-integration/workflows/CodeQL/badge.svg)
![Greetings](https://github.com/naivedeveloper95/node-twilio-integration/workflows/Greetings/badge.svg)
![Labeler](https://github.com/naivedeveloper95/node-twilio-integration/workflows/Labeler/badge.svg)
![Mark stale issues and pull requests](https://github.com/naivedeveloper95/node-twilio-integration/workflows/Mark%20stale%20issues%20and%20pull%20requests/badge.svg)

## This a basic node project for sample node-Twilio integration

## Routes

### POST /sms

```javascript
Content-Type: application/json

{
  "recipient" : "+<COUNTRY_CODE><PHONE_NUMBER>",
  "message": "Hello, this is a sms sent to one person!"
}
```

### POST /smsUsingMessageServiceID

```javascript
Content-Type: application/json

{
  "recipient" : "+<COUNTRY_CODE><PHONE_NUMBER>",
  "sms": "Hello, this is a sms sent to one person!"
}
```

### POST /sendGroupSMS

```javascript
Content-Type: application/json

{
  "recipients" : [
      "+<COUNTRY_CODE><PHONE_NUMBER_1>",
      "+<COUNTRY_CODE><PHONE_NUMBER_2>",
      "+<COUNTRY_CODE><PHONE_NUMBER_3>",
      "+<COUNTRY_CODE><PHONE_NUMBER_4>",
      "+<COUNTRY_CODE><PHONE_NUMBER_5>"
    ],
  "message": "Hello, this is a group sms"
}
```
