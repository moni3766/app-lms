import { View, Text, StyleSheet } from 'react-native';

export default function MyApp() {
  return (
    <View >
      <Text>Thông tin sinh viên</Text>
      <View>
        <Text>Họ và tên: Truong nong doai</Text>
        <Text>MSSV: 23103015</Text>
        <Text>Lớp: CNTT K23</Text>
        <Text>Ngày sinh: 05/02/2003</Text>
        <Text>Địa chỉ: 123 Đường ABC, Đak Lak</Text>
      </View>
    </View>
  );
}