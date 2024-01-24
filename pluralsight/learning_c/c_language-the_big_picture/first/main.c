#include <stdio.h>
#include "order.h"

int main(int argc, char *argv[])
//int main()
{
  double order_subtotal = 50.00;

  double grand_total = calculate_order_total(order_subtotal);

  printf("Grand total: %lf\n", grand_total);
}
