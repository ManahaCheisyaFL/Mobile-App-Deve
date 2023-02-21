// Import modul konversi
import { convertToCelsius } from "./conversion.js";

// Input suhu dalam Fahrenheit
const fahrenheit = 99.2;

// Konversi Fahrenheit ke Celsius
const celsius = convertToCelsius(fahrenheit);

// Tampilkan hasil konversi
console.log(`${fahrenheit} fahrenheit = ${celsius.toFixed(2)} celsius`);
