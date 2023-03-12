import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class UserPageList extends StatefulWidget {
  const UserPageList({Key? key}) : super(key: key);

  @override
  State<UserPageList> createState() => _UserPageListState();
}

class _UserPageListState extends State<UserPageList> {
  List<String> docID = [];
  getUserFromDatabase() async {
    FirebaseFirestore.instance.collection('user').get().then((value) {
      for (var temp in value.docs) {
        docID.add(temp.reference.id);
      }
    });
  }

  Future getUser(String docId) async {
    final docProduct = FirebaseFirestore.instance.collection('user').doc(docId);

    final snapshot = await docProduct.get();
    await docProduct.collection('user').doc(docId).get();
    if (snapshot.exists) {
      return snapshot.data() as Map<String, dynamic>;
    }
    return snapshot.data() as Map<String, dynamic>;
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getUserFromDatabase();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('User Database'.toUpperCase())),
      body: ListView.builder(
          itemCount: docID.length,
          itemBuilder: (context, index) {
            return FutureBuilder(
              future: getUser(docID[index]),
              builder: (context, snapshot) {
                var user = snapshot.data as Map;
                return snapshot.hasError
                    ? const Center(
                        child: Icon(
                          Icons.info,
                          color: Colors.red,
                        ),
                      )
                    : snapshot.connectionState == ConnectionState.waiting
                        ? const Center(
                            child: CircularProgressIndicator(),
                          )
                        : snapshot.hasData
                            ? Card(
                                child: ListTile(
                                  title: Text(user['username']),
                                  subtitle: Text(user['email']),
                                ),
                              )
                            : const SizedBox();
              },
            );
          }),
    );
  }
}
