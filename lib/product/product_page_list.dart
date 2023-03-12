import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class ProductPageList extends StatefulWidget {
  const ProductPageList({Key? key}) : super(key: key);

  @override
  State<ProductPageList> createState() => _ProductPageListState();
}

class _ProductPageListState extends State<ProductPageList> {
  List<String> docId = [];

  getDocumentID() async {
    await FirebaseFirestore.instance.collection('products').get().then((value) {
      for (var element in value.docs) {
        docId.add(element.reference.id);
      }
    });
  }

  Future getProduct(String docId) async {
    final docProduct =
        FirebaseFirestore.instance.collection('products').doc(docId);

    final snapshot = await docProduct.get();
    await docProduct.collection('products').doc(docId).get();
    if (snapshot.exists) {
      return snapshot.data() as Map<String, dynamic>;
      // Lecture.fromJson(lect.data()!);
      // Student stu = Student.fromJson(snapshot.data()!);
      // stu.displayData();
      //print('Data:${snapshot.data()!}');
      //return Student.fromJson(snapshot.data()!);
    }
    return snapshot.data() as Map<String, dynamic>;
    // return Student.fromJson(snapshot.data()!);
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
      appBar: AppBar(title: Text('product Databse'.toUpperCase())),
      body: ListView.builder(
        itemCount: docId.length,
        itemBuilder: (context, index) {
          return FutureBuilder(
            future: getProduct(docId[index]),
            builder: (context, snapshot) {
              var pro = snapshot.data as Map;
              return snapshot.hasError
                  ? const Center(
                      child: Icon(
                        Icons.info,
                        size: 30,
                        color: Colors.red,
                      ),
                    )
                  : snapshot.connectionState == ConnectionState.waiting
                      ? const Center(
                          child: CircularProgressIndicator(),
                        )
                      : snapshot.hasData
                          ? pro != null
                              ? Card(
                                  child: ListTile(
                                    leading: CircleAvatar(
                                      child: Image(
                                          image: NetworkImage(
                                              pro['image'].toString())),
                                    ),
                                    title: Text(pro['name'].toString()),
                                    subtitle: Text('\$ ${pro['price']}'),
                                  ),
                                )
                              : const SizedBox()
                          : const SizedBox();
            },
          );
        },
      ),
    );
  }
}
