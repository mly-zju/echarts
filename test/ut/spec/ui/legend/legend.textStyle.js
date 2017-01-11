describe('legend.textStyle', function() {

	var uiHelper = window.uiHelper;

	var suites = [{
		name: 'textStyle.color',
		cases: [{
			name: 'should display expected color name',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						color: 'blue'
					}
				}
			}
		}, {
			name: 'should display expected color 6-digit hex',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						color: '#0000ff'
					}
				}
			}
		}, {
			name: 'should display expected color 3-digit hex',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						color: '#00f'
					}
				}
			}
		}, {
			name: 'should display expected color rgb',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						color: 'rgb(0,0,255)'
					}
				}
			}
		}, {
			name: 'should display expected color rgba',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						color: 'rgba(0,0,255,0.5)'
					}
				}
			}
		}]
	}, {
		name: 'textStyle.fontStyle',
		cases: [{
			name: 'should display normal font style',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						fontStyle: 'normal'
					}
				}
			}
		}, {
			name: 'should display italic font style',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						fontStyle: 'italic'
					}
				}
			}
		}, {
			name: 'should display oblique font size',
			option: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						fontStyle: 'oblique'
					}
				}
			}
		}, {
			name: 'should display italic not as normal',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						fontStyle: 'italic'
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'item_a',
						value: 1
					}, {
						name: 'item_b',
						value: 1
					}]
				}],
				legend: {
					data: ['item_a', 'item_b'],
					textStyle: {
						fontStyle: 'normal'
					}
				}
			}
		}]
	}, {
		name: 'textStyle.fontWeight',
		cases: [{
			name: 'should display normal font weight by default',
			test: 'equalOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'normal',
						value: 1
					}]
				}],
				legend: {
					data: ['normal']
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'normal',
						value: 1
					}]
				}],
				legend: {
					data: ['normal'],
					textStyle: {
						fontWeight: 'normal'
					}
				}
			}
		}, {
			name: 'should display bold font weight',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'bold vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['bold vs normal'],
					textStyle: {
						fontWeight: 'bold'
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'bold vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['bold vs normal'],
					textStyle: {
						fontWeight: 'normal'
					}
				}
			}
		}, {
			name: 'should display bolder font weight',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'bolder vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['bolder vs normal'],
					textStyle: {
						fontWeight: 'bolder'
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'bolder vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['bolder vs normal'],
					textStyle: {
						fontWeight: 'normal'
					}
				}
			}
		}, {
			name: 'should display lighter font weight',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'lighter vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['lighter vs normal'],
					textStyle: {
						fontWeight: 'lighter'
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'lighter vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['lighter vs normal'],
					textStyle: {
						fontWeight: 'normal'
					}
				}
			}
		}, {
			name: 'should display numbering font weight',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: '100 font vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['100 font vs normal'],
					textStyle: {
						fontWeight: '100'
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: '100 font vs normal',
						value: 1
					}]
				}],
				legend: {
					data: ['100 font vs normal'],
					textStyle: {
						fontWeight: 'normal'
					}
				}
			}
		}]
	}, {
		name: 'textStyle.fontFamily',
		cases: [{
			name: 'should display default fontFamily as sans-serif',
			test: 'equalOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'sans-serif',
						value: 1
					}]
				}],
				legend: {
					data: ['sans-serif']
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'sans-serif',
						value: 1
					}]
				}],
				legend: {
					data: ['sans-serif'],
					textStyle: {
						fontFamily: 'sans-serif'
					}
				}
			}
		}, {
			name: 'should display fontFamily as Arial',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'Arial vs sans-serif',
						value: 1
					}]
				}],
				legend: {
					data: ['Arial vs sans-serif'],
					textStyle: {
						fontFamily: 'Arial'
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'Arial vs sans-serif',
						value: 1
					}]
				}],
				legend: {
					data: ['Arial vs sans-serif'],
					textStyle: {
						fontFamily: 'sans-serif'
					}
				}
			}
		}]
	}, {
		name: 'textStyle.fontSize',
		cases: [{
			name: 'should display default fontSize at 12',
			test: 'equalOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'fontSize 12',
						value: 1
					}]
				}],
				legend: {
					data: ['fontSize 12']
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'fontSize 12',
						value: 1
					}]
				}],
				legend: {
					data: ['fontSize 12']
				}
			}
		}, {
			name: 'should display larger font size',
			test: 'notEqualOption',
			option1: {
				series: [{
					type: 'pie',
					data: [{
						name: 'fontSize 18 vs fontSize 12',
						value: 1
					}]
				}],
				legend: {
					data: ['fontSize 18 vs fontSize 12'],
					textStyle: {
						fontSize: 18
					}
				}
			},
			option2: {
				series: [{
					type: 'pie',
					data: [{
						name: 'fontSize 18 vs fontSize 12',
						value: 1
					}]
				}],
				legend: {
					data: ['fontSize 18 vs fontSize 12'],
					textStyle: {
						fontSize: 12
					}
				}
			}
		}]
	}];

	uiHelper.testOptionSpec('legend.textStyle', suites);

});
