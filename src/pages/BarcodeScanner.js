import React, { useEffect, useState } from 'react'
import { Fab, TextareaAutosize } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { Link } from "react-router-dom";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { initializeApp } from "firebase/app";

import { getDatabase, ref, child, get, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6kYuYYV3eLAEsEB7DnAV5hh1kqrNazs0",
  authDomain: "scanpaygo-8fa82.firebaseapp.com",
  databaseURL: "https://scanpaygo-8fa82-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scanpaygo-8fa82",
  storageBucket: "scanpaygo-8fa82.appspot.com",
  messagingSenderId: "937679103874",
  appId: "1:937679103874:web:166c8eefd388042d6fd19b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Set Data in firebase
function writeProductData(productId, name, description, price) {
  set(ref(db, 'products/' + productId), {
    name: name,
    description: description,
    price: price
  });
}
//writeProductData("6221043040097", "ReparilGel", "PainRelieve", "50LE");
// end of Set Data in firebase

function BarcodeScanner() {
  const [data, setData] = React.useState("");
  const [product, setProduct] = React.useState("");

  // retrieve Data from firebase
  useEffect(() => {
    if (!data) return;
    const dbRef = ref(getDatabase());
    get(child(dbRef, "products/" + data))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("data available below");
          console.log(snapshot.val());
          setProduct(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);

  

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>Scan</span>
      <center>
        <div style={{ marginTop: 30 }}>
        <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
            }}
          />
        </div>
        
      </center>
      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={4}
        defaultValue={data}
        value={data}
      />

    
  {Object.entries(product).map(([key, value]) => <div> {key} : {value}</div>)}
  
    
    </div>
   

  );
}
export default BarcodeScanner;
