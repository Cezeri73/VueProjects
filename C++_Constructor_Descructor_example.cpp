#include <iostream>

class ArrayClass {
private:
    int* array;  // Dinamik dizi iþaretçisi
    int size;    // Dizinin boyutu

public:
    // Parametreli Yapýcý (Constructor)
    ArrayClass(int s) : size(s) {
        array = new int[size];  // Dinamik diziye yer ayýr
        for (int i = 0; i < size; i++) {
            array[i] = i + 1;  // Örnek veri atama (1, 2, 3, ...)
        }
        std::cout << "Constructor çaðrýldý ve " << size << " elemanlý dizi oluþturuldu.\n";
    }

    // Yýkýcý (Destructor)
    ~ArrayClass() {
        delete[] array;  // Dinamik belleði serbest býrak
        std::cout << "Destructor çaðrýldý ve dizi belleði serbest býrakýldý.\n";
    }

    // Diziyi yazdýran bir fonksiyon
    void printArray() const {
        for (int i = 0; i < size; i++) {
            std::cout << array[i] << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    ArrayClass arr(5);  // 5 elemanlý bir dizi oluþtur
    arr.printArray();    // Diziyi ekrana yazdýr

    // Program bittiðinde destructor otomatik olarak çaðrýlacak
    return 0;
}

