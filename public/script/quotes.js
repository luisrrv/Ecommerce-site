function getRandom(){
    let myArray = ['"SIIIUUUU!"', '"I am living a dream I never want to wake up from."', '"When you lose a person you love so much, surviving the loss is difficult."', '"I still learn, but I think it is the best thing in life to have a kid."', '"I think sometimes the best training is to rest."', '"I do not have to show anything to anyone there is nothing to prove."', '"We cannot live being obsessed with what other people think about us. It is impossible to live like that. Not even God managed to please the entire world."', '"Why lie? I am not going to be a hypocrite and say the opposite of what I think, like some others do."', '"I am not going to change the world. You are not going to change the world. But we can help - we can all help."', '"We should make the most of life, enjoy it because that is the way it is!"', '"I never promise anything. I do not promise anything to my mum. I do not promise anything to the supporters."', '"If we cannot help our family, who are going to help."', '"We do not want to tell our dreams. We want to show them."', '"It is my conviction that here are no limits to learning, and that it can never stop, no matter what our age."', '"I see football as an art and all players are artists. If you are a top artist the last thing you would do is paint a picture somebody else has already painted."', '"I have my flaws too, but I am a professional who does not like to miss or lose."', ' "I prefer other people to make judgments about the way I play and to characterize me, rather me describe myself."', '"There is no harm in dreaming of becoming the world’s best player. It is all about trying to be the best. I will keep working hard to achieve it but it is within my capabilities."', '"I see myself as the best footballer in the world. If you do not believe you are the best, then you will never achieve all that you are capable of."', '"Your love makes me strong, your hate makes me unstoppable."', '"I do not mind people hating me, because it pushes me."', '"Talent without working hard is nothing."', '"If you think you are perfect already, then you never will be."', '"I know I am a good professional, I know that no one is harder on me than myself and that is never going to change, under any circumstances."', '"Dreams are not what you see in your sleep, dreams are things which do not let you sleep."', '"Dedication, hard work all the time, and belief."'];
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("quotes").innerHTML=random;
}