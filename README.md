# JavaScript-SMS-integration

## It is a simple javascript applicaton,that handles SMS integration using node.js, Express & twilio. using this, a user can send single SMS as well as Group SMS

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
