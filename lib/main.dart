import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

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

Future<Pokedex> fetchPokedex() async {
  final response =
  await http.get('https://pokeapi.co/api/v2/pokemon/');

  if (response.statusCode == 200) {
    // If the call to the server was successful, parse the JSON
    return Pokedex.fromJson(json.decode(response.body));
  } else {
    // If that call was not successful, throw an error.
    throw Exception('Failed to load Pokedex');
  }
}

class Pokedex {
  final String url;
  final String name;

  Pokedex({this.name, this.url});

  factory Pokedex.fromJson(Map<String, String> json) {
    return Pokedex(
      name: json["name"],
      url: json["url"],
    );
  }
}