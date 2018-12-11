for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 4 != 0) document.write("fizz<br />");
  else if (i % 4 == 0 && i % 3 != 0) document.write("buzz<br />");
  else if (i % 4 == 0 && i % 3 == 0) document.write("fizzbuzz<br />");
  else document.write(i+"<br />");
}
