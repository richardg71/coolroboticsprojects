#define LED1 2
#define LED2 3
#define LED3 4
#define LED4 5
#define P1In A0

int n = 0;
int benchmark = 690;
bool wasPressed = false;

void setup() {
  // put your setup code here, to run once:
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);
  pinMode(P1In, INPUT);

  digitalWrite(LED1, HIGH);
  digitalWrite(LED2, LOW);
  digitalWrite(LED3, LOW);
  digitalWrite(LED4, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (analogRead(P1In) <= benchmark && wasPressed) {
    n = n + 1;
    if (n == 4) {
      n = 0;
    }
  }

  if (n == 0) {
    digitalWrite(LED1, HIGH);
    digitalWrite(LED4, LOW);
  }
  else if (n == 1) {
    digitalWrite(LED1, LOW);
    digitalWrite(LED2, HIGH);
  }
  else if (n == 2) {
    digitalWrite(LED2, LOW);
    digitalWrite(LED3, HIGH);
  }
  else {
    digitalWrite(LED3, LOW);
    digitalWrite(LED4, HIGH);
  }

  wasPressed = analogRead(P1In) >= benchmark;

  delay(200);
}
