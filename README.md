# JavaScript-SMS-integration

## It is a simple javascript applicaton,that handles SMS integration using node.js, Express & twilio. using this, a user can send single SMS as well as Group SMS

## Routes

### POST /sms

```javascript
Content-Type: application/json

{
  "recipient" : "+<CC><PHNO>",
  "message": "Hello, this is a sms sent to one person!"
}
```

### POST /smsUsingMessageServiceID

```javascript
Content-Type: application/json

{
  "recipient" : "+<CC><PHNO>",
  "sms": "Hello, this is a sms sent to one person!"
}
```

### POST /sendGroupSMS

```javascript
Content-Type: application/json

{
  "recipients" : [
      "+<CC><PHNO_1>",
      "+<CC><PHNO_2>",
      "+<CC><PHNO_3>",
      "+<CC><PHNO_4>",
      "+<CC><PHNO_5>"
    ],
  "message": "Hello, this is a group sms"
}
```
