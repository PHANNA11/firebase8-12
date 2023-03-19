import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class AddProduct extends StatefulWidget {
  AddProduct({Key? key, this.product, this.documnetId}) : super(key: key);
  dynamic product;
  String? documnetId;
  @override
  State<AddProduct> createState() => _AddProductState();
}

class _AddProductState extends State<AddProduct> {
  String screenType = '';
  TextEditingController nameController = TextEditingController();

  TextEditingController priceController = TextEditingController();

  TextEditingController linkImageController = TextEditingController();

  String? imageLink;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    if (widget.product != null) {
      screenType = 'Update Product';
      nameController.text = widget.product['name'];
      priceController.text = widget.product['price'].toString();
      linkImageController.text = imageLink = widget.product['image'];
    } else {
      screenType = 'Add Product';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(screenType == 'Add Product' ? screenType : screenType)),
      body: Wrap(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: nameController,
              decoration: const InputDecoration(
                  hintText: 'Product name', border: OutlineInputBorder()),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: priceController,
              decoration: const InputDecoration(
                  hintText: 'Product price', border: OutlineInputBorder()),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              onChanged: (value) {
                setState(() {
                  imageLink = value;
                });
              },
              controller: linkImageController,
              decoration: const InputDecoration(
                  hintText: 'link Image', border: OutlineInputBorder()),
            ),
          ),
          linkImageController.text.isNotEmpty
              ? Expanded(
                  child: Image(
                  image: NetworkImage(linkImageController.text),
                ))
              : const SizedBox()
        ],
      ),
      bottomNavigationBar: SizedBox(
        height: 50,
        width: double.infinity,
        child: CupertinoButton(
            borderRadius: BorderRadius.circular(0),
            color: Theme.of(context).primaryColor,
            onPressed: () async {
              if (screenType == 'Add Product') {
                if (nameController.text.isEmpty ||
                    priceController.text.isEmpty ||
                    linkImageController.text.isEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                      content: Text('Please insert data in text field')));
                } else {
                  await FirebaseFirestore.instance.collection('products').add({
                    'id': DateTime.now().millisecond,
                    'name': nameController.text,
                    'price': double.parse(priceController.text),
                    'image': linkImageController.text
                  }).whenComplete(() => Navigator.pop(context));
                }
              } else {
                if (nameController.text.isEmpty ||
                    priceController.text.isEmpty ||
                    linkImageController.text.isEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                      content: Text('Please insert data in text field')));
                } else {
                  widget.product['name'] = nameController.text;
                  widget.product['price'] = priceController.text;
                  widget.product['image'] = linkImageController.text;
                  await FirebaseFirestore.instance
                      .collection('products')
                      .doc(widget.documnetId)
                      .set(widget.product)
                      .whenComplete(() => Navigator.pop(context));
                }
              }
            },
            child: Center(
              child: Text(screenType == 'Add Product' ? 'Add' : 'Update'),
            )),
      ),
    );
  }
}
