#include <stdio.h>

int choice(){
    char ans;
    scanf(" %c", &ans);

    switch(ans) {
        case 'y':
        case 'Y':
            return 1;
        case 'n':
        case 'N':
            return 0;
        default:
            return 2;
    }

int start_game() {
    printf("Do you want to play? (y/n): \n");
    int choice = choice();
    if(choice == 0)
           printf("You missed your chance \n");
    if(choice == 1)
           printf("Let's do it! \n");
    if(choice == 2)
           printf("I dont understand that language\n");

    return choice;
}
     
int main(){}
