var dataSetForMapAnimation;
var dataSetForMap;

//Dataset for part1
dataSetForMap = [
                 	{
                		"tuberclosis": 100,
                		"swine_flu": 10,
                		"lon": 77.0053502585,
                		"malaria_incidence": 50,
                		"dengue": 2,
                		"lat": 11.0241980423,
                		"bird_flu": 3
                	},
                	{
                		"tuberclosis": 2,
                		"swine_flu": 3,
                		"lon": 77.0175452,
                		"malaria_incidence": 10,
                		"dengue": 30,
                		"lat": 11.0258396,
                		"bird_flu": 99
                	},
                	{
                		"tuberclosis": 30,
                		"swine_flu": 95,
                		"lon": 77.0459929554,
                		"malaria_incidence": 3,
                		"dengue": 10,
                		"lat": 11.0436851245,
                		"bird_flu": 2
                	},
                	{
                		"tuberclosis": 10,
                		"swine_flu": 2,
                		"lon": 77.0519621,
                		"malaria_incidence": 100,
                		"dengue": 2,
                		"lat": 11.0463201,
                		"bird_flu": 30
                	},
                	{
                		"tuberclosis": 16,
                		"swine_flu": 30,
                		"lon": 77.0559979,
                		"malaria_incidence": 2,
                		"dengue": 30,
                		"lat": 11.048701,
                		"bird_flu": 10
                	},
                	{
                		"tuberclosis": 30,
                		"swine_flu": 10,
                		"lon": 77.0667757086,
                		"malaria_incidence": 30,
                		"dengue": 10,
                		"lat": 11.0560882406,
                		"bird_flu": 30
                	},
                	{
                		"tuberclosis": 41,
                		"swine_flu": 21,
                		"lon": 77.0715749,
                		"malaria_incidence": 10,
                		"dengue": 16,
                		"lat": 11.0577603,
                		"bird_flu": 10
                	},
                	{
                		"tuberclosis": 10,
                		"swine_flu": 3,
                		"lon": 77.5224919602,
                		"malaria_incidence": 95,
                		"dengue": 30,
                		"lat": 11.24668701,
                		"bird_flu": 30
                	},
                	{
                		"tuberclosis": 21,
                		"swine_flu": 100,
                		"lon": 77.546182208,
                		"malaria_incidence": 2,
                		"dengue": 41,
                		"lat": 11.2551515383,
                		"bird_flu": 10
                	},
                	{
                		"tuberclosis": 3,
                		"swine_flu": 2,
                		"lon": 77.5464655,
                		"malaria_incidence": 30,
                		"dengue": 10,
                		"lat": 11.255316,
                		"bird_flu": 21
                	},
                	{
                		"tuberclosis": 100,
                		"swine_flu": 30,
                		"lon": 77.5467866,
                		"malaria_incidence": 10,
                		"dengue": 21,
                		"lat": 11.2554976,
                		"bird_flu": 3
                	},
                	{
                		"tuberclosis": 2,
                		"swine_flu": 10,
                		"lon": 77.5471831,
                		"malaria_incidence": 21,
                		"dengue": 1,
                		"lat": 11.2557262,
                		"bird_flu": 100
                	}
                ]


//Dataset for part2
dataSetForMapAnimation=[
	{
		"birdflu_direction": 75,
		"lon": 77.0053502585,
		"malaria_incidence": 50,
		"dengue": 2,
		"malaria_direction": 90,
		"lat": 11.0241980423,
		"bird_flu": 3,
		"dengue_direction": 65
	},
	{
		"birdflu_direction": 75.03,
		"lon": 77.0519621,
		"malaria_incidence": 100,
		"dengue": 2,
		"malaria_direction": 90.03,
		"lat": 11.0463201,
		"bird_flu": 30,
		"dengue_direction": 65.03
	},
	{
		"birdflu_direction": 75.02,
		"lon": 77.0459929554,
		"malaria_incidence": 3,
		"dengue": 10,
		"malaria_direction": 90.02,
		"lat": 11.0436851245,
		"bird_flu": 2,
		"dengue_direction": 65.02
	},
	{
		"birdflu_direction": 75.01,
		"lon": 77.0175452,
		"malaria_incidence": 10,
		"dengue": 30,
		"malaria_direction": 90.01,
		"lat": 11.0258396,
		"bird_flu": 99,
		"dengue_direction": 65.01
	},
	{
		"birdflu_direction": 75.04,
		"lon": 77.0559979,
		"malaria_incidence": 2,
		"dengue": 30,
		"malaria_direction": 90.04,
		"lat": 11.048701,
		"bird_flu": 10,
		"dengue_direction": 65.04
	},
	{
		"birdflu_direction": 75.06,
		"lon": 77.0715749,
		"malaria_incidence": 10,
		"dengue": 16,
		"malaria_direction": 90.06,
		"lat": 11.0577603,
		"bird_flu": 10,
		"dengue_direction": 65.06
	},
	{
		"birdflu_direction": 75.05,
		"lon": 77.0667757086,
		"malaria_incidence": 30,
		"dengue": 10,
		"malaria_direction": 90.05,
		"lat": 11.0560882406,
		"bird_flu": 30,
		"dengue_direction": 65.05
	},
	{
		"birdflu_direction": 75.07,
		"lon": 77.5224919602,
		"malaria_incidence": 95,
		"dengue": 30,
		"malaria_direction": 90.07,
		"lat": 11.24668701,
		"bird_flu": 30,
		"dengue_direction": 65.07
	},
	{
		"birdflu_direction": 75.11,
		"lon": 77.5471831,
		"malaria_incidence": 21,
		"dengue": 1,
		"malaria_direction": 90.11,
		"lat": 11.2557262,
		"bird_flu": 100,
		"dengue_direction": 65.11
	},
	{
		"birdflu_direction": 75.09,
		"lon": 77.5464655,
		"malaria_incidence": 30,
		"dengue": 10,
		"malaria_direction": 90.09,
		"lat": 11.255316,
		"bird_flu": 21,
		"dengue_direction": 65.09
	},
	{
		"birdflu_direction": 75.08,
		"lon": 77.546182208,
		"malaria_incidence": 2,
		"dengue": 41,
		"malaria_direction": 90.08,
		"lat": 11.2551515383,
		"bird_flu": 10,
		"dengue_direction": 65.08
	},
	{
		"birdflu_direction": 75.1,
		"lon": 77.5467866,
		"malaria_incidence": 10,
		"dengue": 21,
		"malaria_direction": 90.1,
		"lat": 11.2554976,
		"bird_flu": 3,
		"dengue_direction": 65.1
	}
]
