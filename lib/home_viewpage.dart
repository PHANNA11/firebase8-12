import 'package:app_firebase/main.dart';
import 'package:app_firebase/product/product_page_list.dart';
import 'package:app_firebase/user/user_page_list.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class HomeViewPage extends StatefulWidget {
  const HomeViewPage({Key? key}) : super(key: key);

  @override
  State<HomeViewPage> createState() => _HomeViewPageState();
}

class _HomeViewPageState extends State<HomeViewPage> {
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
      body: ListView(
        children: [
          InkWell(
            onTap: () {
              Navigator.push(context, MaterialPageRoute(
                builder: (context) {
                  return const ProductPageList();
                },
              ));
            },
            child: const Card(
              color: Colors.blueAccent,
              child: SizedBox(
                  height: 60,
                  child: Center(
                      child: Text(
                    'Product (FireStore Database)',
                    style: TextStyle(fontSize: 26),
                  ))),
            ),
          ),
          InkWell(
            onTap: () {
              Navigator.push(context, MaterialPageRoute(
                builder: (context) {
                  return const UserPageList();
                },
              ));
            },
            child: const Card(
              color: Colors.blueAccent,
              child: SizedBox(
                  height: 60,
                  child: Center(
                      child: Text(
                    'User (FireStore Database)',
                    style: TextStyle(fontSize: 26),
                  ))),
            ),
          )
        ],
      ),
    );
  }
}
