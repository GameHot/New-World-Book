#include <stdio.h>
#define MAX_WEIGHT 500

struct Player{ //
     int ammo;
     int food;
     int water;
     int totalWeight;
};



struct Player player{0, 0, 0, 0};

int choice(){ //core mechanism: Asks for yes or no
    char ans;
    scanf(" %c", &ans);
    switch(ans) {
        case 'Y':
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
    int choose = choice();
    if(choose == 0)
           printf("You missed your chance \n");
    if(choose == 1)
           printf("Let's do it! \n");
    if(choose == 2)
           printf("I dont understand that language, exiting game\n");//edit to loop until you valid input
    return choose;
}

 int sailor(){                                                                                                                                                                                                                23
    printf("You are a sailor set out to explore the New World\n" );
    printf("You have heard of many treachores fears that have taken the lives of many other sailors\n");
    printf("and other pirates");
    printf(" Do you wish to take this journey? Y/n\n");
    int c = choice();
    return choice;
  }


int main(){
     return 0;
}
