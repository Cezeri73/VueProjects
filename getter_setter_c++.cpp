#include <iostream>
#include <string>

using namespace std;

class Person {
private:
    string name;
    int age;

public:
    // name için setter metodu
    void setName(const string& n) {
        name = n;
    }

    // name için getter metodu
    string getName() const {
        return name;
    }

    // age için setter metodu
    void setAge(int a) {
        if (a >= 0) { // Negatif yaþ kontrolü
            age = a;
        } else {
            cerr << "Geçersiz yaþ deðeri!" << endl;
        }
    }

    // age için getter metodu
    int getAge() const {
        return age;
    }

    // Bilgileri ekrana yazdýran metot
    void displayInfo() const {
        cout << "Ýsim: " << name << "\nYaþ: " << age << endl;
    }
};

int main() {
    Person p;
    p.setName("Murat KAYNAR");
    p.setAge(29);

    cout << "Kiþi Bilgileri:" << endl;
    p.displayInfo();

    return 0;
}

