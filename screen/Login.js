import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

const Login = ({ navigation }) => {
  var [users, setUsers] = useState([]);
  var [userName, setUserName] = useState("");
  var [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error));
  }, []);

  const checkLogin = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].userName == userName && users[i].password == password) {
        return true;
      }
    }
    return false;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>ĐĂNG NHẬP</Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
          paddingHorizontal: 50,
        }}
      >
        <TextInput
          placeholder="Tên đăng nhập"
          style={{ borderWidth: 1, padding: 10, borderRadius: 8, fontSize: 20 }}
          onChangeText={setUserName}
        />
        <TextInput
          placeholder="Mật khẩu"
          style={{ borderWidth: 1, padding: 10, borderRadius: 8, fontSize: 20 }}
          onChangeText={setPassword}
        />
      </View>
      <View
        style={{
          flex: 3,
          paddingHorizontal: 50,
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
          }}
          onPress={(checkLogin() === true) ? () => navigation.navigate("home") : () => alert("Sai tên đăng nhập hoặc mật khẩu")}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("signUp");
            }}
          >
            <Text style={{ color: "blue" }}>Đăng ký</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
