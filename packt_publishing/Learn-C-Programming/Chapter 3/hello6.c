#include <stdio.h>

void printAGreeting(char* greeting) {
  printf("%s", greeting);
}

void printAComma(void) {
  printf(", ");
}

void printAnAddressee(char* aName) {
  printf("%s", aName);
}

void printANewLine() {
  printf("\n");
}

void printGreeting(char* greeting, char* addressee) {
  printAGreeting(greeting);
  printAComma();
  printAnAddressee(addressee);
  printANewLine();
}

int main(){
  printGreeting( "Hi", "Bub");
}