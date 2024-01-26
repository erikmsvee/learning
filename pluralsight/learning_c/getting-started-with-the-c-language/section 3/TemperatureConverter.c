#include <stdio.h>

int main() {
  /* prompt user for temperature in Faharenheit */
  float temperatureF;

  printf("Please enter a temperature in Faharenheit: ");
  /* & refererer til adressen til variabelen */
  scanf("%f", &temperatureF);

  float temperatureC = (temperatureF - 32.0) * 5.0 / 9.0;

  printf("The temperatur in Celcius is %.2f C. \n", temperatureC);

  return 0;
}
