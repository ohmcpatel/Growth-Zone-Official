import * as random from 'random';
import { NoneType } from 'types';

var array_transfer, discipline, fitness, input, mindfulness, social_anxiety, stress;

fitness = ["Go on a 30 minute jog", "Do 15 Push Ups", "Make a Nutritious Meal", "Play a Sport", "Workout your Core", "Swim for an Hour", "Go Rock Climbing", "Go Biking for 30 Minutes", "Get up and Dance", "Stretch/Yoga"];
stress = ["Make a cup of Tea or Coffee", "Meditate for 30 Minutes", "Cold Shower", "Get 8 Hours of Sleep", "Organize your Day", "Cook Comfort Food", "Unplug for an Hour", "Self-Care Day", "Clean", "Talk to a Friend"];
social_anxiety = ["Talk to a stranger", "Compliment Someone", "Attend a Free Event", "Do Whatever Your Friend Says For a Day", "Make a Friend", "Go to Karaoke", "Try a new Fasion Style", "Connect with Loved Ones", "Ask for Someone's Number", "Join a Club"];
mindfulness = ["Write in a Journal", "Meditate", "Thank Someone", "Give a Gift", "Take a Nature Walk", "Unplug for an Hour", "Donate", "Volunteer", "Mend a Relationship", "Self Affirmations"];
discipline = ["Wake up at 6 am", "Make Your Bed", "Do a Chore", "Ready for One Hour", "No Social Media for the Day", "Write out Your Goals", "Show up to Work Early", "Pomodoro for 5 Sessions", "Finish an Online Course", "No Added Sugar for a Day"];
array_transfer = {
  "fitness": fitness,
  "stress": stress,
  "social_anxiety": social_anxiety,
  "mindfulness": mindfulness,
  "discipline": discipline
};

input = ["fitness", "discipline"];

function main() {
  var choice, total_tasks;
  total_tasks = [];

  for (var i = 0, _pj_a = input.length; i < _pj_a; i += 1) {
    choice = input[i];

    if (total_tasks.length === 0) {
      total_tasks = give_tasks(choice, i, input.length);
    } else {
      total_tasks = total_tasks + give_tasks(choice, i, input.length);
    }

    for (var task, _pj_d = 0, _pj_b = total_tasks, _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
      task = _pj_b[_pj_d];
      console.log(task);
    }

    total_tasks = [];
  }
}

function give_tasks(choice, position, total_chal) {
  if (position === 0) {
    if (total_chal === 1) {
      return random_task(choice, 5);
    }

    if (total_chal === 2) {
      return random_task(choice, 3);
    }

    if (total_chal === 3) {
      return random_task(choice, 2);
    }
  }

  if (position === 1) {
    if (total_chal === 2) {
      return random_task(choice, 2);
    }

    if (total_chal === 3) {
      return random_task(choice, 2);
    }
  }

  if (position === 2) {
    if (total_chal === 3) {
      return random_task(choice, 1);
    }
  }
}

function random_task(choice, num_tasks) {
  var arr_choice, randint, x;
  x = [];
  arr_choice = array_transfer[choice];

  for (var i = 0, _pj_a = num_tasks; i < _pj_a; i += 1) {
    randint = random.randint(0, arr_choice.length - 1);
    x.append(arr_choice[randint]);
    arr_choice.remove(arr_choice[randint]);
  }

  return x;
}

main();