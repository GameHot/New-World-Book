#include <stdio.h>
#define MAX_WEIGHT 500

struct Player{ //
     int ammo;
     int food;
     int water;
     int totalWeight;
};

struct Player player = {0, 0, 0, 0};


int choice() {
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
     
int main(){
    return 0;
}

