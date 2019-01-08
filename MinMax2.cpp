/*
##########
#PROBLEM DESCRIPTION
##########

Given 2 numbers, 3 digits each, show the maximum and the minimum number formed with
a digit from a number, and from a digit from the other number.

##########
#EXAMPLE
##########
For 123 912
=>
93 11

##########
#SOLUTION
##########
*/
#include <iostream>

using namespace std;

int main()
{
    int a, b, c1, c2, mina, minb, maxa, maxb, max, min, micMinim;
    cin >> a >> b;

    bool a0, b0;
    a0 = b0 = false;
    
    
    mina = minb = 9;
    maxa = maxb = 0;

    while(a != 0) {
        c1 = a % 10;
        c2 = b % 10;
        if(c1) {
          if(c1 <= mina)
            mina = c1;
          if(c1 >= maxa)
            maxa = c1;
        } else {
            a0 = true;
        }
        if (c2) {
          if(c2 <= minb)
            minb = c2;
          if(c2 >= maxb)
            maxb = c2;
        } else {
            b0 = true;
        }
        a /= 10;
        b /= 10;
    }

    maxa >= maxb ? max = maxa * 10 + maxb : max = maxb * 10 + maxa;


    mina <= minb ? micMinim = mina : micMinim = minb;

    if ((micMinim == mina && b0) || (micMinim == minb && a0))
        min = micMinim * 10;
    else
        mina <= minb ? min = mina * 10 + minb : min = minb * 10 + mina;

    cout << max << " " << min << endl;
}