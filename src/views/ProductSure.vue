<template>
  <div>
    <v-contdainer class="d-flex flex-wrap" id="home">
      {{ uid }}
      <v-container>
        <a href="/admin">Admin Store</a>
      </v-container>
      <v-card
        class="mx-auto mb-5"
        max-width="400"
        v-for="(i, index) in csDoc"
        :key="index"
      >
        <v-img class="green--text align-end" height="200px" :src="i.data.image">
          <v-card-title class="textColor">{{ i.data.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ i.data.category }}</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>{{ "$" + i.data.price }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" @click="addCart(i)">ADD </v-btn>
          <v-btn
            color="warning"
            :to="{
              name: 'productdetail',
              params: {
                id: i.id,
                description: i.data.description,
                img: i.data.image,
                price: i.data.price,
              },
            }"
            >Detail</v-btn
          >
          <v-btn elevation="2" @click="deleteMovie(i.id)">Delete</v-btn>
          <v-btn elevation="2" @click="check(i)">Edit</v-btn>
        </v-card-actions>
      </v-card>
    </v-contdainer>
    <!-- ------------------------------------------ POP UP -------------------------------------------- -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- ------------------------------------------ END POP UP -------------------------------------------- -->
    <!-- ------------------------------------------ END POP UP -------------------------------------------- -->
    <v-container>
      <div class="setForm">
        <h1>Add</h1>
        <v-text-field
          label="Description"
          placeholder="description"
          outlined
          v-model="obj.desC"
        ></v-text-field>
        <v-text-field
          label="Img Url"
          placeholder="Url"
          outlined
          v-model="obj.img"
        ></v-text-field>
        <v-text-field
          label="Price"
          placeholder="price"
          outlined
          v-model="obj.price"
        ></v-text-field>
      </div>
      <v-btn elevation="2" @click="conncectNew()">Edit</v-btn>
    </v-container>
    <div class="row">
      <div class="col-md-4">
        <router-view :key="$route.path"></router-view>
      </div>
      <div class="col-md-8" v-if="carts != 0">
        <h4>Cart</h4>
        <table class="table table-striped">
          <thead>
            <tr align="center">
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in carts" :key="index" align="center">
              <td>
                <img :src="product.img" alt="" width="60px" height="60px" />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <i
                  class="fas fa-minus quantity-minus"
                  @click="minusQTY(product)"
                ></i
                >{{ product.quantity
                }}<i
                  class="fas fa-plus quantity-plus"
                  @click="plusQTY(product)"
                ></i>
              </td>
              <td>{{ product.total }}</td>
              <td>
                <v-btn color="error" @click="removeProduct(product)"
                  ><i class="fa fa-trash"></i
                ></v-btn>
              </td>
            </tr>
          </tbody>
          <tbody align="center">
            <td></td>
            <td></td>
            <td></td>
            <td><h5>Total price</h5></td>
            <td>
              <h6>{{ total() }}</h6>
            </td>
            <td>
              <v-btn class="success">- Pay -</v-btn>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      carts: [],
      csDoc: [],
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      obj: {
        desC: null,
        img: null,
        price: null,
      },
      uid: "",
    };
  },
  beforeMount() {
    this.readData();
  },
  methods: {
    readData() {
      this.csDoc = [];
      const q = query(collection(db, "colectionStore"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.csDoc.push({ id: doc.id, data: doc.data() });
        });
        // console.log("Current cities in CA: ", this.csDoc.join(", "));
      });
    },
    addCart: function (i) {
      if (i.id == 1) {
        this.one += 1;
        if (this.one <= 1) {
          this.pushData(i);
        } else {
          var Oone = this.findID(i);
          this.carts[Oone].quantity += 1;
          this.carts[Oone].total =
            this.carts[Oone].quantity * this.carts[Oone].price;
        }
      }
      if (i.id == 2) {
        this.two += 1;
        if (this.two <= 1) {
          this.pushData(i);
        } else {
          var Ttwo = this.findID(i);
          this.carts[Ttwo].quantity += 1;
          this.carts[Ttwo].total =
            this.carts[Ttwo].quantity * this.carts[Ttwo].price;
        }
      }
      if (i.id == 3) {
        this.three += 1;
        if (this.three <= 1) {
          this.pushData(i);
        } else {
          var Tthree = this.findID(i);
          this.carts[Tthree].quantity += 1;
          this.carts[Tthree].total =
            this.carts[Tthree].quantity * this.carts[Tthree].price;
        }
      }
      if (i.id == 4) {
        this.four += 1;
        if (this.four <= 1) {
          this.pushData(i);
        } else {
          var Ffour = this.findID(i);
          this.carts[Ffour].quantity += 1;
          this.carts[Ffour].total =
            this.carts[Ffour].quantity * this.carts[Ffour].price;
        }
      }
      if (i.id == 5) {
        this.five += 1;
        if (this.five <= 1) {
          this.pushData(i);
        } else {
          var Ffive = this.findID(i);
          this.carts[Ffive].quantity += 1;
          this.carts[Ffive].total =
            this.carts[Ffive].quantity * this.carts[Ffive].price;
        }
      }
      if (i.id == 6) {
        this.six += 1;
        if (this.six <= 1) {
          this.pushData(i);
        } else {
          var Ssix = this.findID(i);
          this.carts[Ssix].quantity += 1;
          this.carts[Ssix].total =
            this.carts[Ssix].quantity * this.carts[Ssix].price;
        }
      }
      if (i.id == 7) {
        this.seven += 1;
        if (this.seven <= 1) {
          this.pushData(i);
        } else {
          var Sseven = this.findID(i);
          this.carts[Sseven].quantity += 1;
          this.carts[Sseven].total =
            this.carts[Sseven].quantity * this.carts[Sseven].price;
        }
      }
      if (i.id == 8) {
        this.eight += 1;
        if (this.eight <= 1) {
          this.pushData(i);
        } else {
          var Eeight = this.findID(i);
          this.carts[Eeight].quantity += 1;
          this.carts[Eeight].total =
            this.carts[Eeight].quantity * this.carts[Eeight].price;
        }
      }
      if (i.id == 9) {
        this.nine += 1;
        if (this.nine <= 1) {
          this.pushData(i);
        } else {
          var Nnine = this.findID(i);
          this.carts[Nnine].quantity += 1;
          this.carts[Nnine].total =
            this.carts[Nnine].quantity * this.carts[Nnine].price;
        }
      }
      if (i.id == 10) {
        this.ten += 1;
        if (this.ten <= 1) {
          this.pushData(i);
        } else {
          var Tten = this.findID(i);
          this.carts[Tten].quantity += 1;
          this.carts[Tten].total =
            this.carts[Tten].quantity * this.carts[Tten].price;
        }
      }

      if (i.id == 11) {
        this.eleven += 1;
        if (this.eleven <= 1) {
          this.pushData(i);
        } else {
          var Eeleven = this.findID(i);
          this.carts[Eeleven].quantity += 1;
          this.carts[Eeleven].total =
            this.carts[Eeleven].quantity * this.carts[Eeleven].price;
        }
      }
      if (i.id == 12) {
        this.twelve += 1;
        if (this.twelve <= 1) {
          this.pushData(i);
        } else {
          var Ttwelve = this.findID(i);
          this.carts[Ttwelve].quantity += 1;
          this.carts[Ttwelve].total =
            this.carts[Ttwelve].quantity * this.carts[Ttwelve].price;
        }
      }
    },
    pushData(i) {
      this.carts.push({
        id: i.id,
        name: i.data.title,
        price: i.data.price,
        img: i.data.image,
        quantity: 1,
        total: i.data.price,
      });
    },
    findID: function (i) {
      for (var x = 0; x < this.carts.length; x++) {
        if (this.carts[x].id == i.id) {
          return x;
        }
      }
      return -1;
    },
    minusQTY: function (product) {
      product.quantity -= 1;
      if (product.quantity <= 1) {
        product.quantity = 1;
      }
      product.total = product.price * product.quantity;
    },
    plusQTY: function (product) {
      product.quantity += 1;
      product.total = product.price * product.quantity;
    },
    removeProduct: function (product) {
      if (confirm("Do you want to remove? ")) {
        var index = this.carts.indexOf(product);
        this.carts.splice(index, 1);
        if (product.id == 1) {
          this.one = 0;
        }
        if (product.id == 2) {
          this.two = 0;
        }
        if (product.id == 3) {
          this.three = 0;
        }
        if (product.id == 4) {
          this.four = 0;
        }
        if (product.id == 5) {
          this.five = 0;
        }
        if (product.id == 6) {
          this.six = 0;
        }
        if (product.id == 7) {
          this.seven = 0;
        }
        if (product.id == 8) {
          this.eight = 0;
        }
        if (product.id == 9) {
          this.nine = 0;
        }
        if (product.id == 10) {
          this.ten = 0;
        }
        if (product.id == 11) {
          this.eleven = 0;
        }
        if (product.id == 12) {
          this.twelve = 0;
        }
      }
    },
    total: function () {
      var sum = 0;
      this.carts.forEach(function (i) {
        sum += i.total;
      });
      return sum;
    },
    async deleteMovie(i) {
      this.csDoc = [];
      console.log("Waiting for delete data...");
      await deleteDoc(doc(db, "colectionStore", i));
      console.log("Deleted...");
    },
    async conncectNew() {
      try {
        const docData = {
          description: this.obj.desC,
          img: this.obj.img,
          price: this.obj.price,
        };
        await setDoc(doc(db, "colectionStore", this.uid), docData);
        console.log("Data Updated...");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    check(i) {
      this.obj.desC = i.data.description;
      this.obj.img = i.data.image;
      this.obj.price = i.data.price;
      this.uid = i.id;
    },
  },
};
</script>

<style scoped>
#home {
  padding: 100px 5%;
}
.quantity-minus {
  cursor: pointer;
  margin-right: 20px;
}
.quantity-plus {
  cursor: pointer;
  margin-left: 20px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 0%;
  }
}

.textColor {
  background: linear-gradient(80deg, #979494, rgb(233, 220, 35));
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 4s infinite;
}
</style>
