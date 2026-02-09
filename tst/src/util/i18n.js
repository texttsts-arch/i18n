import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			hello: "Hello",
			world: "World",
			name: "Name",
			age: "Age",
			cat: "Cat",
			dog: "Dog",
			car: "Car",
			tree: "Tree",
			food: "Food",
			drink: "Drink",
		},
	},
	fr: {
		translation: {
			hello: "Bonjour",
			world: "Monde",
			name: "Nom",
			age: "Âge",
			cat: "Chat",
			dog: "Chien",
			car: "Voiture",
			tree: "Arbre",
			food: "Nourriture",
			drink: "Boisson",
		},
	},
	ar: {
		//i want the ar mapping too by community in weblate
	},
};

i18n
	.use(HttpBackend) // load translations via HTTP
	.use(initReactI18next)
	.init({
		lng: "en",
		fallbackLng: "en",
		interpolation: { escapeValue: false },
		backend: {
			loadPath: "/locales/{{lng}}/translation.json", // path to your JSON files
		},
	});

export default i18n;
