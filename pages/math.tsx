import PageHeading from "../components/PageHeading";
import Subject from "../components/Subject";
//import Symbol from "../components/Symbol";
//import Link from 'next/link'
import Section from "../components/Section";
import Link from 'next/link'

export default function Math() {
  return (
    <>
    <main className="flex flex-col gap-8 text-white">
      <PageHeading>Chapter 1</PageHeading>
      <Subject>Mathmatical Signs</Subject>
      <Section>
plus sign: + / addition sign: +
The plus sign represents:

a. the notion of positive
Any number bigger than zero is a positive number and can be written with or without a plus sign in front of it.

Thus, +5 (plus five) and 5 (five) are the same number.

b. the operation of addition
3 + 5 = 8
three plus five equals eight
five added to three makes eight
three added to five makes eight
if you add five to three you get eight

Addition gives us a sum. In 3 + 5 = 8, the sum is eight.
      </Section>
      
      <Section>
minus sign: - / subtraction sign: - 
The minus sign represents:

a. the notion of negative
Any number smaller than zero is a negative number and must be written with a minus sign in front of it.

Thus, -5 (minus five) is not the same number as 5 (positive five).

b. the operation of subtraction
3 - 5 = -2
three minus five equals negative two
five subtracted from three makes negative two
three subtracted from five makes negative two

Subtraction gives us a difference. In 3 - 5 = -2, the difference is negative two.
      </Section>

      <Section>
multiplication sign: x / times sign: x
The multiplication sign represents:

 the operation of multiplication
3 x 5 = 15
three times five equals fifteen
five multiplied by three makes fifteen
three multiplied by five makes fifteen

Multiplication gives us a product. In 3 x 5 = 15, the product is fifteen.
      </Section>

      <Section>
division sign: ÷ / over sign: ÷
The division sign represents:

 the operation of division
15 ÷ 5 = 3
fifteen divided by five equals three
five divided into fifteen makes three

Division gives us a quotient. In 15 ÷ 5 = 3, the quotient is three.
      </Section>

      <Section>
equal sign: =
The equal sign represents:

a. the notion of equality
If two numbers have the same value, we say that they are equal.

Thus, 3 = 3 (three equals three) and 8 = 8 (eight equals eight) are both true statements.

b. the operation of equality
If two numbers have the same value, then the result of any operation performed on them is also equal to that value.

Thus, 3 + 5 = 8 (three plus five equals eight) and 3 - 5 = -2 (three minus five equals negative two) are both true statements.
      </Section>

      <Section>
greater than sign: {">"}
The greater than sign represents: 
the notion of greater than 
If one number is bigger than another, we say that the first number is greater than the second number.

Thus, 5 {">"} 3 (five is greater than three) and 8 {">"} 5 (eight is greater than five) are both true statements.
      </Section>

      <Section>
less than sign: {"<"}
 The less than sign represents: 
the notion of less than 
If one number is smaller than another, we say that the first number is less than the second number.

Thus, 3 {"<"} 5 (three is less than five) and 5 {"<"} 8 (five is less than eight) are both true statements.
      </Section>

      <Section>
greater than or equal to sign: ≥ / at least sign: ≥
The greater than or equal to sign represents: 
the notion of greater than or equal to 
If one number is bigger than another, or if they are equal, we say that the first number is greater than or equal to the second number.

Thus, 5 ≥ 3 (five is greater than or equal to three) and 5 ≥ 5 (five is greater than or equal to five) are both true statements.
      </Section>

      <Section>
less than or equal to sign: ≤ / at most sign: ≤
The less than or equal to sign represents: 
the notion of less than or equal to 
If
one number is smaller than another, or if they are equal, we say that the first number is less than or equal to the second number.

Thus, 3 ≤ 5 (three is less than or equal to five) and 5 ≤ 5 (five is less than or equal to five) are both true statements.
      </Section>

      <Section>
inequality sign: ≠ / not equal to sign: ≠
The inequality sign represents: 
the notion of inequality 
If two numbers have different values, we say that they are not equal.

Thus, 3 ≠ 5 (three is not equal to five) and 8 ≠ 5 (eight is not equal to five) are both true statements.
      </Section>

      <Section>
square root sign: √
The square root sign represents: 
the operation of square root 
√4 = 2
the square root of four equals two
two is the square root of four

The square root of a number is the number that, when multiplied by itself, gives the original number.

Thus, √4 = 2 (the square root of four equals two) and √25 = 5 (the square root of twenty-five equals five) are both true statements.
      </Section>

      <Section>
square sign: ²
The square sign represents: 
the operation of squaring 
4² = 16
four squared equals sixteen
sixteen is four squared

Squaring a number is the same as multiplying it by itself.

Thus, 4² = 16 (four squared equals sixteen) and 5² = 25 (five squared equals twenty-five) are both true statements.
      </Section>

      <Section>
cube sign: ³
The cube sign represents: 
the operation of cubing(multiplying a number by itself thrice) 
4³ = 64
four cubed equals sixty-four(4 x 4 x 4 = 64)
sixty-four is four cubed

Cubing a number is the same as multiplying it by itself three times

Thus, 4³ = 64 (four cubed equals sixty-four) and 5³ = 125 (five cubed equals one hundred twenty-five) are both true statements.
      </Section>

      <Section>
exponent sign: ^
The exponent sign represents: 
the operation of exponentiation 
4^2 = 16
four to the power of two equals sixteen
sixteen is four to the power of two

Exponentiation is the same as repeated multiplication.

Thus, 4^2 (multiply 4 by itself two wtimes 4 X 4) = 16 (four to the power of two equals sixteen) and 5^3 = 125 (five to the power of three equals one hundred twenty-five) are both true statements.
      </Section>

      <Section>
factorial sign: !
The factorial sign represents: 
the operation of factorial 
4! = 24
four factorial equals twenty-four
twenty-four is four factorial

Factorial is the same as repeated multiplication.

Thus, 4! = 24 (four factorial equals twenty-four) and 5! = 120 (five factorial equals one hundred twenty) are both true statements.
      </Section>

      <Section>
percent sign: %
The percent sign represents: 
the operation of percent 
20% of 100 = 20

Thus, 20% of 100 = 20 (twenty percent of one hundred equals twenty) and 50% of 100 = 50 (fifty percent of one hundred equals fifty) are both true statements.
      </Section>

      <Section>
pi sign: π
The pi sign represents: 
the operation of pi 
π = 3.141592653589793238462643383279502884197169399375105820974944592307816406286
the number pi equals 3.141592653589793238462643383279502884197169399375105820974944592307816406286
3.141592653589793238462643383279502884197169399375105820974944592307816406286 is the number pi

Pi is the ratio of the circumference of a circle to its diameter. It is approximately equal to 3.141592653589793238462643383279502884197169399375105820974944592307816406286.
      </Section>

      <Section>
euler's number sign: e
The euler's number sign represents: 
the operation of euler's number 
e = 2.7182818284590452353602874713526624977572470936999595749669676277240766303535
the number e equals 2.7182818284590452353602874713526624977572470936999595749669676277240766303535

Euler's number is the base of the natural logarithm. It is approximately equal to 2.7182818284590452353602874713526624977572470936999595749669676277240766303535.
      </Section>

      <Section>
logarithm sign: log
The logarithm sign represents:
the operation of logarithm
log 100 = 2
the logarithm of 100 equals 2
2 is the logarithm of 100

Logarithm is the inverse of exponentiation. It is the number of times a number must be multiplied by itself to equal another number.

Thus, log 100 = 2 (the logarithm of one hundred equals two) and log 1000 = 3 (the logarithm of one thousand equals three) are both true statements.
      </Section>

      <Section>
natural logarithm sign: ln
The natural logarithm sign represents:

the operation of natural logarithm
ln 100 = 4.6051701859880913680359829093687

the natural logarithm of 100 equals 4.6051701859880913680359829093687

4.6051701859880913680359829093687 is the natural logarithm of 100

Natural logarithm is a logarithm to the base e.

Thus, ln 100 = 4.6051701859880913680359829093687 (the natural logarithm of one hundred equals 4.6051701859880913680359829093687) and ln 1000 = 6.9077552789821370520539747189725 (the natural logarithm of one thousand equals 6.9077552789821370520539747189725) are both true statements.
      </Section>
    </main>

    

    <Link href="/mathQuiz">
      <button
          type="button"
          className="inline-flex items-center 	text-align: center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Evaluation 
        </button> 
        </Link>
    	</>
      
  );
}