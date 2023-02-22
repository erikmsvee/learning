#include <stdio.h>

double inchesToFeet(double);

int main(void) 
{
  double inches = 1024.0;
  double feet = inchesToFeet(inches);

  printf("%g incehs is equal to %g feet \n", inches, feet);
}

double inchesToFeet(double someInches)
{
  return someInches / 12.0;
}