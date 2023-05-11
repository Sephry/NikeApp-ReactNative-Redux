import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selected products
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("Products Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={{ fontSize: 16, fontWeight: "400" }}>{item.name}</Text>
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
