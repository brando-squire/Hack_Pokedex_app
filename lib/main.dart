import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    print(fetchPokedex());
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
    print(json.decode(response.body));

    var data = json.decode(response.body);
    final items = (data['items'] as List).map((i) => new Pokedex.fromJson(i));
    for (final item in items) {
      print(item.name);
      print(item.url);
    }
    //return Pokedex.fromJson(items);
  } else {
    // If that call was not successful, throw an error.
    throw Exception('Failed to load Pokedex');
  }
}

class Pokedex {
  final String url;
  final String name;
  final List<String> results;

  Pokedex({this.name, this.url, this.results});

  factory Pokedex.fromJson(Map<String, dynamic> json) {
    print(json);
    return Pokedex(
        name: json["name"],
        url: json["url"]
    );

  }

}