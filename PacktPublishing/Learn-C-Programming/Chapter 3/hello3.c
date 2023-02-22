#include <stdio.h>

void printComma(void) {
  printf(", ");
}

void printWord(char* word) {
  printf("%s", word);
}

int main(){
  printWord("Hello");
  printComma();
  printWord("world");
  printf("!\n");
}