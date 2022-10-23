import random
from types import NoneType


fitness = ["Go on a 30 minute jog", "Do 15 Push Ups", "Make a Nutritious Meal", "Play a Sport", "Workout your Core",
 "Swim for an Hour", "Go Rock Climbing", "Go Biking for 30 Minutes", "Get up and Dance", "Stretch/Yoga"]

stress = ["Make a cup of Tea or Coffee", "Meditate for 30 Minutes", "Cold Shower", "Get 8 Hours of Sleep", "Organize your Day",
 "Cook Comfort Food", "Unplug for an Hour", "Self-Care Day", "Clean", "Talk to a Friend"]

social_anxiety = ["Talk to a stranger", "Compliment Someone", "Attend a Free Event", "Do Whatever Your Friend Says For a Day",
 "Make a Friend", "Go to Karaoke", "Try a new Fasion Style", "Connect with Loved Ones", "Ask for Someone's Number", "Join a Club"]

mindfulness = ["Write in a Journal", "Meditate", "Thank Someone", "Give a Gift", "Take a Nature Walk", "Unplug for an Hour", "Donate",
 "Volunteer", "Mend a Relationship", "Self Affirmations"]

discipline = ["Wake up at 6 am", "Make Your Bed", "Do a Chore", "Ready for One Hour", "No Social Media for the Day", "Write out Your Goals",
 "Show up to Work Early", "Pomodoro for 5 Sessions", "Finish an Online Course", "No Added Sugar for a Day"]

array_transfer = {
    "fitness" : fitness,
    "stress" : stress, 
    "social_anxiety" : social_anxiety,
    "mindfulness" : mindfulness,
    "discipline" : discipline
}

input = ["fitness", "discipline"]

def main():
    total_tasks = []
    for i in range(len(input)):
        choice = input[i]
        if (len(total_tasks) == 0):
            total_tasks = (give_tasks(choice, i, len(input)))
        else:
            total_tasks = total_tasks + (give_tasks(choice, i, len(input)))
       
        for task in total_tasks:
            print(task)
        total_tasks = []


def give_tasks(choice, position, total_chal):
    if position == 0:
        if total_chal == 1:
            return random_task(choice, 5)
        if total_chal == 2:
            return random_task(choice, 3)
        if total_chal == 3:
            return random_task(choice, 2)
    if position == 1:
        if total_chal == 2:
            return random_task(choice, 2)
        if total_chal == 3:
            return random_task(choice, 2)
    if position == 2:
        if total_chal == 3:
            return random_task(choice, 1)
    
def random_task(choice, num_tasks):
    x = []
    arr_choice = array_transfer[choice]
    for i in range(num_tasks):
        randint = random.randint(0, len(arr_choice)-1)
        x.append(arr_choice[randint])
        arr_choice.remove(arr_choice[randint])
    return x


main()







