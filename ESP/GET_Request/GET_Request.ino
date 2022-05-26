/*
  Rui Santos
  Complete project details at Complete project details at https://RandomNerdTutorials.com/esp8266-nodemcu-http-get-post-arduino/

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  Code compatible with ESP8266 Boards Version 3.0.0 or above 
  (see in Tools > Boards > Boards Manager > ESP8266)
*/

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Wire.h>
const char* ssid = "NAP";
const char* password = "PaSsWoRd";
bool toSend = false;
String dataSend = "";
int dataRecieve = 0;
double currentDB;
//Your Domain name with URL path or IP address with path
String serverNameSound = "https://embedded-fumi.pisutjirarat.repl.co/sound";
String serverNameDoor = "https://embedded-fumi.pisutjirarat.repl.co/door";
String host = "embedded-fumi.pisutjirarat.repl.co";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
unsigned long timerDelay = 5000;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200); 
  Serial.println("Test");
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
  Wire.begin(D1, D2);
}
void loudGet(){
  if ((millis() - lastTime) > timerDelay) {
      //Check WiFi connection status
      if(WiFi.status()== WL_CONNECTED){
        WiFiClientSecure client;
        HTTPClient http;
        
        const int httpPort = 443; // 80 is for HTTP / 443 is for HTTPS!
          client.setInsecure(); // this is the magical line that makes everything work
          if (!client.connect(host, httpPort)) { //works!
            Serial.println("connection failed");
            return;
          }
        String serverPath = serverNameSound;
        
        // Your Domain name with URL path or IP address with path
        http.begin(client, serverPath.c_str());
        
        // Send HTTP GET request
        int httpResponseCode = http.GET();
        
        if (httpResponseCode>0) {
          Serial.print("HTTP Response code: ");
          Serial.println(httpResponseCode);
          String payload = http.getString();
          Serial.println(payload);
        }
        else {
          Serial.print("Error code: ");
          Serial.println(httpResponseCode);
        }
        // Free resources
        http.end();
      }
      else {
        Serial.println("WiFi Disconnected");
      }
      lastTime = millis();
  }}
void doorGet(){
  if ((millis() - lastTime) > timerDelay) {
      //Check WiFi connection status
      if(WiFi.status()== WL_CONNECTED){
        WiFiClientSecure client;
        HTTPClient http;
        
        const int httpPort = 443; // 80 is for HTTP / 443 is for HTTPS!
          client.setInsecure(); // this is the magical line that makes everything work
          if (!client.connect(host, httpPort)) { //works!
            Serial.println("connection failed");
            return;
          }
        String serverPath = serverNameDoor;
        
        // Your Domain name with URL path or IP address with path
        http.begin(client, serverPath.c_str());
        
        // Send HTTP GET request
        int httpResponseCode = http.GET();
        
        if (httpResponseCode>0) {
          Serial.print("HTTP Response code: ");
          Serial.println(httpResponseCode);
          String payload = http.getString();
          Serial.println(payload);
        }
        else {
          Serial.print("Error code: ");
          Serial.println(httpResponseCode);
        }
        // Free resources
        http.end();
      }
      else {
        Serial.println("WiFi Disconnected");
      }
      lastTime = millis();
  }}
void loop() {
  // put your main code here, to run repeatedly:  /* request & read data of size 13 from slave */
  //Serial.println("TEST");
  if(!toSend){
      Wire.requestFrom(0, 5); 
      dataSend = "";
      bool isInput = false;
     while(Wire.available()){
        isInput = true;
        dataRecieve+=1;
        //Serial.println(dataRecieve);
        char c = Wire.read();
        if(c==' '){
          c=0;
        }else if(c=='-'){
          doorGet();
        }
        dataSend+=c;
      //Serial.print(c);
     }
     if(isInput){
      currentDB = (dataSend[0]-48)*1000+(dataSend[1]-48)*100+(dataSend[2]-48)*10+(dataSend[3]-48);
      currentDB = 2048+abs(2048-currentDB);
      //Serial.print("log : ");
      //Serial.println(log(currentDB/1241.0));
      currentDB = 20.0*log(currentDB/1241.0);
      
     // Serial.println(dataSend);
      ////Serial.println((dataSend[0]-48)*1000+(dataSend[1]-48)*100+(dataSend[2]-48)*10+(dataSend[3]-48));
      //Serial.println(dataSend);
      if(currentDB>70){
        loudGet();
        Serial.println("TOO LOUD");
        //Serial.println(dataSend);
      }
      else if(currentDB>60){
        Serial.println("LOUD");
      }
      else if(currentDB>50){
        Serial.println("A Little TOO LOUD");
      }
     }
     
  }
  delay(1);
/* if(dataRecieve==320000){
  Serial.println("TestTo");
  toSend=true;
  dataRecieve = 0;
 }*/
 //toSend=true;
 }
 
