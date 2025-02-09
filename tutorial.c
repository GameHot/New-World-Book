#include <stdio.h>
#include <stdio.h>

int start_game() {
    char ans;
    printf("Do you want to play? (y/n): ");
    scanf(" %c", &ans);

    switch(ans) {
        case 'y':
        case 'Y':
            printf("Let's do it!\n");
            return 1;
        case 'n':
        case 'N':
            printf("You missed your chance.\n");
            return 0;
        default:
            printf("Invalid input. You missed your chance.\n");
            return 2;
    }
}
     
int main(){}
