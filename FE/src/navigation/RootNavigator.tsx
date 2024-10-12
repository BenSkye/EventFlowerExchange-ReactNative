import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/buyer/ProductDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import OrdersScreen from '../screens/OrdersScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, View } from 'react-native';
import RegisterScreen from '../screens/RegisterScreen';
import EditProfile from '../screens/EditProfile';
import ProductDetail from '../screens/buyer/ProductDetail';
import PostProduct from '../screens/seller/PostProductScreen';
import ManageProduct from '../screens/seller/ManageProductScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
    MainTabs: undefined;
    HomeStack: undefined;
    HomeScreen: undefined;
    Detail: { productId: string };
    Register: undefined;
    Profile: undefined;
    Login: { returnTo?: keyof RootStackParamList };
    EditProfile: undefined;
    SellProduct: undefined;
    ManageProduct: undefined;
    Orders: undefined;
    Notifications: undefined;
};

// Material Design 3 color palette
const colors = {
    primary: '#5a61c9',
    secondary: '#03DAC6',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
};

const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='SellProduct' component={PostProduct} />
        <Stack.Screen name='ManageProduct' component={ManageProduct} />
    </Stack.Navigator>
);

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Orders') {
                    iconName = focused ? 'bag' : 'bag-outline';
                } else if (route.name === 'Notifications') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                return (
                    <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View
                            style={{
                                position: 'absolute',
                                width: '45%',
                                top: -11,
                                height: 5,
                                backgroundColor: focused ? colors.primary : 'transparent',
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                            }}
                        />
                        <Icon name={iconName || ''} size={size} color={color} />
                    </View>
                );
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: styles.tabBar,
            headerShown: false,
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

const RootNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.background }
        }}
    >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name='SellProduct' component={PostProduct} />
        <Stack.Screen name='ManageProduct' component={ManageProduct} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.surface,
        height: 60,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
        elevation: 8,
    }
})

export default RootNavigator;
