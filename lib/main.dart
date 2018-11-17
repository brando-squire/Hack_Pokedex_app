import 'dart:_http';

import 'package:flutter/material.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  Pokedex p = new Pokedex();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Startup name Generator",
        home: Text("New App"),
      theme: ThemeData.dark(),
    );
  }
}

class Pokedex{
  Pokedex() {
    HttpClient client = new HttpClient();
    client.getUrl(Uri.parse("https://pokeapi.co/api/v2/pokemon/"))
        .then((HttpClientRequest request) {
      // Optionally set up headers...
      // Optionally write to the request object...
      // Then call close.
      return request.close();
    })
        .then((HttpClientResponse response) {
      // Process the response.
      if(response.statusCode == 200){
        Pokedex.fromJson
      }
    });
  }

}