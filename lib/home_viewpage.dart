import 'package:app_firebase/main.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class HomeViewPage extends StatefulWidget {
  const HomeViewPage({Key? key}) : super(key: key);

  @override
  State<HomeViewPage> createState() => _HomeViewPageState();
}

class _HomeViewPageState extends State<HomeViewPage> {
  List<String> docId = [];

  getDocumentID() async {
    await FirebaseFirestore.instance.collection('products').get().then((value) {
      for (var element in value.docs) {
        docId.add(element.reference.id);
      }
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getDocumentID();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        drawer: SafeArea(
          child: Drawer(
            child: Column(
              children: [
                Card(
                  color: Theme.of(context).primaryColor,
                  child: ListTile(
                    onTap: () async {
                      await FirebaseAuth.instance.signOut().then((value) {
                        Navigator.pushAndRemoveUntil(
                            context,
                            MaterialPageRoute(
                              builder: (context) =>
                                  const MyHomePage(title: 'Login User'),
                            ),
                            (route) => false);
                      });
                    },
                    title: const Text('log Out'),
                    trailing: const Icon((Icons.logout)),
                  ),
                )
              ],
            ),
          ),
        ),
        appBar: AppBar(title: const Text('View Page')),
        body: ListView.builder(
          itemCount: docId.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                leading: const CircleAvatar(),
                title: Text(docId[index]),
              ),
            );
          },
        ));
  }
}
