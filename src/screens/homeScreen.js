import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button } from "../components/ui/buttons/Button"
import bluePallete from "../components/utils/blue"
import MainLayout from "../components/ui/layouts/MainLayout"
import axios from "axios"
import { RoundButton } from "../components/ui/buttons/RoundButton"

const { width } = Dimensions.get("window")
const ITEM_WIDTH = width * 0.48
export default function Home() {
    const [recipes, setRecipes] = useState(null)

    async function getRecipes() {
        try {
            const response = await axios.get('https://recipes-api-dev.koyeb.app/recipe/basic/get/all')
            setRecipes(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <MainLayout>
            <ScrollView>
                <View style={{ width: '98%', aspectRatio: 16 / 9, backgroundColor: 'green', alignSelf: 'center', marginVertical: 10 }}>
                    <Text>SA</Text>
                </View>
                <Text>Recetas destacadas</Text>

                <RoundButton style = {{position: 'absolute'}}/>

                <FlatList
                    data={recipes}
                    numColumns={2}
                    columnWrapperStyle={{ gap: 8, alignSelf: 'center' }}
                    renderItem={({ item: recipe }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: recipe.mainImg }} style={styles.image} resizeMode="cover" />
                            <Text style={{ color: "black", fontSize: 16, fontWeight: 700 }}>{recipe.name}</Text>
                        </View>
                    )}
                />
            </ScrollView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 8
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'green',
    },
    card: {
        width: '48%',
        backgroundColor: 'red',
        marginBottom: 10,
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 4
    }
})