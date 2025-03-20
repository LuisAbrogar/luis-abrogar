const titles = ["Multi&#45;Function Calculator", 
                "CyclingCompanion",
                "Pipelined MMU",
                "Survey Text Miner",
                "Solstice Google Calendar Mod", 
                "IEEE Micromouse",
                "8&#45;Segment LED Digital Clock"];
const descs = [
    "An Android app with three main calculator functions&#58;<br><br>&#8226; Basic signed decimal arithmetic<br>&#8226; Restaurant tip and split amount<br>&#8226; Unit converter",
    "An Android app for cycling&#44; with the following functions&#58;<br><br>&#8226; Live ride data tracking &#40;ie&#46; average speed&#44; total distance&#41;<br>&#8226; Live route tracking&#44; traced on Google Maps<br><br>Ride data is saved&#44; and can be reviewed by the user in their ride history",
    "A Multimedia unit design&#44; written in VHDL&#58;<br><br>&#8226; 4 main components with 25&#45;bit instructions and 128&#45;bit registers<br>&#8226; Instruction pipeline with 25 ALU functions<br>&#8226; Instruction buffer that stores input according to control signal<br>&#8226; Register file that holds 32 registers and is capable of 3 reads and 1 write per cycle<br>&#8226; Forwarding unit<br>&#8226; ALU that takes 3 register inputs and 1 instrution input&#59; executes specified instruction and sends result to specified register",
    "A Python text mining solution&#58;<br>&#8226; Extracts organized and meaningful data points from a large body of unstructured text<br>&#8226; Determines overall sentiment of each response<br>&#8226; Extracts keywords or topics<br><br> This provides much more context to survey results&#44; allowing a user to better understand them",
    "A Mersive Solstice mod written in Python&#58;<br>&#8226; Pulls a classroom's live scheduling information from Google Calendar<br>&#8226; Pushes data into corresponding room's installed Solstice Pod&#44; displaying its availability and reservation info<br><br>This was created and used at Stony Brook before full support for Google Calendar was created and officially released by Mersive",
    "Member of the 2019 IEEE Chapter at Stony Brook&#39;s Micromouse Team<br>Tuned the robot to improve its ability to detect walls&#47;openings and performed any necessary maintenance<br><br>Placed 3rd in the 2019 IEEE Region 1 Micromouse competition at SUNY Binghamton",
    "A fully functional digital clock with features&#58;<br>&#8226; Basic timekeeping functions<br>&#8226; 12 hour&#47;24 hour formats<br>&#8226; Alarm<br>&#8226; USB charging port<br>&#8226; LED seconds counter&#44; represented in binary"
];
const tech = [
    "&#8226; Java<br>&#8226; Android Studio<br>&#8226; XML",
    "&#8226; Java<br>&#8226; Android Studio<br>&#8226; XML<br>&#8226; Google Maps API<br>&#8226; Google Firebase",
    "&#8226; VHDL<br>&#8226; Aldec Active&#45;HDL",
    "&#8226; Python<br>&#8226; Microsoft Azure<br>&#8226; NLTK library<br>&#8226; Microsoft Visual Studio",
    "&#8226; Python<br>&#8226; Google Calendar API<br>&#8226; Spyder",
    "&#8226; C<br>&#8226; Microsoft Visual Studio",
    "&#8226; x86 Assembly<br>&#8226; Atmel Studio<br>&#8226; Oscilloscope<br>&#8226; Multimeter<br>&#8226; Solder"
];

const imgs = [
    "./img/calculator.jpg",
    "./img/cyclingcompanion.jpg",
    "./img/mmu.jpg",
    "./img/textmining.jpg",
    "./img/solstice.jpg",
    "./img/micromouse.jpg",
    "./img/ledclock.jpg"
]





$(window).on("load", function () {
    $('div.content:first-of-type').fadeIn(1000);
});
(function($) {
    let x = 1000;
    //Navigation menu
    $('div button').click(function() {
        $(this).addClass('active').siblings('button').removeClass('active');
        $('div.content:nth-of-type(' + $(this).data('rel') + ')').fadeIn(x + 300, 'linear').siblings('div.content').fadeOut(x - 300, 'linear');
        
    });

    //Project menu
    $('a.proj_menu').on("click", function () {
        $('#popup').fadeIn(2000);
        var index = $(this).data('rel');
        $('#popup_title').html(titles[index]);
        $('#popup_desc').html(descs[index])
        $('#popup_used').html(tech[index]);
        $('#popup_img').attr("src", imgs[index]);
    });

    
})(jQuery);


