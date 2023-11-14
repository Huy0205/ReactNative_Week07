import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

const SignUp = () => {
  var [userName, setUserName] = useState("");
  var [fullName, setFullName] = useState("");
  var [password, setPassword] = useState("");

  const addUser = () => {
    fetch("http://localhost:3000/users", {
      method: "PUT",
      body: JSON.stringify({
        userName: userName,
        fullName: fullName,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>ĐĂNG KÝ</Text>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "space-evenly",
          paddingHorizontal: 50,
        }}
      >
        <TextInput
          style={{
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "white",
          }}
          placeholder="Tên đăng nhập"
          onChangeText={setUserName}
        />
        <TextInput
          style={{
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "white",
          }}
          placeholder="Họ và tên"
          onChangeText={setFullName}
        />
        <TextInput
          style={{
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "white",
          }}
          placeholder="Mật khẩu"
        />
        <TextInput
          style={{
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "white",
          }}
          placeholder="Nhập lại mật khẩu"
          onChangeText={setPassword}
        />
        <Pressable
          style={{
            borderRadius: 8,
            padding: 10,
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={addUser}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
            Đăng ký
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
