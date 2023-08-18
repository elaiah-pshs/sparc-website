export function findPage(target_path, json) {
	if (target_path.length == 1)
        return json[target_path[0]];
	else
        return findPage(
            target_path.slice(1),
            json[target_path[0]]["children"]
        );
}

export const pages = {
    "about": {
        "href": "/about",
        "src": "/icons/placeholder.svg",
        "alt": "About Us",
    },
    "help": {
        "href": "/help",
        "src": "/icons/placeholder.svg",
        "alt": "Help",
    },
    "report": {
        "href": "/report",
        "src": "/icons/placeholder.svg",
        "alt": "Report",
    },
    "materials": {
        "href": "/materials",
        "src": "/icons/placeholder.svg",
        "alt": "All Materials",
        "children": {
            "reviewers": {
                "href": "/materials/reviewers",
                "src": "/icons/placeholder.svg",
                "alt": "Reviewers",
                "children": {
                    "q1": {
                        "href": "/materials/reviewers/q1",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 1",
                        "children": {
                            "is": {
                                "href": "/materials/reviewers/q1/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/reviewers/q1/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics",
                                
                                "children": {
                                    "matrices": {
                                        "href": "/materials/reviewers/q1/math/matrices",
                                        "src": "/icons/placeholder.svg",
                                        "alt": "Matrices",
                                        "children": {
                                            "matrices_intro": {
                                                "href": "/materials/reviewers/q1/math/matrices/matrices_intro",
                                                "src": "/icons/placeholder.svg",
                                                "alt": "Introduction to Matrices",
                                            }
					    "matrices_ops": {
                                                "href": "/materials/reviewers/q1/math/matrices/matrices_ops",
                                                "src": "/icons/placeholder.svg",
                                                "alt": "Matrix Operations",
                                            }
                                        }
                                    }
				    "letv": {
                                        "href": "/materials/reviewers/q1/math/letv",
                                        "src": "/icons/placeholder.svg",
                                        "alt": "Linear Equations in Two Variables",
                                        "children": {
                                            "cartesian_summary": {
                                                "href": "/materials/reviewers/q1/math/letv/cartesian_summary",
                                                "src": "/icons/placeholder.svg",
                                                "alt": "Summary: Cartesian Coordinate System and Lines",
                                            }
                                        }
                                    }
                                }
                            },
                            "eng": {
                                "href": "/materials/reviewers/q1/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/reviewers/q1/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/reviewers/q1/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/reviewers/q1/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/reviewers/q1/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science",

                                "children": {
                                    "subtopic_1": {
                                        "href": "/materials/reviewers/q1/es/subtopic_1",
                                        "src": "/icons/placeholder.svg",
                                        "alt": "Subtopic 1",

                                        "children": {
                                            "discussion_1": {
                                                "href": "/materials/reviewers/q1/es/subtopic_1/discussion_1",
                                                "src": "/icons/placeholder.svg",
                                                "alt": "Discussion 1",
                                            }
                                        }
                                    },
                                    "subtopic_2": {
                                        "href": "/materials/reviewers/q1/es/subtopic_2",
                                        "src": "/icons/placeholder.svg",
                                        "alt": "Subtopic 2",
                                    }
                                }
                            }
                        }
                    },
                    "q2": {
                        "href": "/materials/reviewers/q2",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 2",
                        "children": {
                            "is": {
                                "href": "/materials/reviewers/q2/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/reviewers/q2/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/reviewers/q2/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/reviewers/q2/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/reviewers/q2/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/reviewers/q2/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/reviewers/q2/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q3": {
                        "href": "/materials/reviewers/q3",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 3",
                        "children": {
                            "is": {
                                "href": "/materials/reviewers/q3/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/reviewers/q3/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/reviewers/q3/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/reviewers/q3/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/reviewers/q3/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/reviewers/q3/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/reviewers/q3/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q4": {
                        "href": "/materials/reviewers/q4",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 4",
                        "children": {
                            "is": {
                                "href": "/materials/reviewers/q4/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/reviewers/q4/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/reviewers/q4/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/reviewers/q4/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/reviewers/q4/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/reviewers/q4/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/reviewers/q4/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    }
                }
            },
            "practices": {        
                "href": "/materials/practices",
                "src": "/icons/placeholder.svg",
                "alt": "Practice Tests",
                "children": {
                    "q1": {
                        "href": "/materials/practices/q1",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 1",
                        "children": {
                            "is": {
                                "href": "/materials/practices/q1/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/practices/q1/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics",
				"children": {
				    "letv": {
				    	"href": "/materials/practices/q1/math/letv",
				    	"src": "/icons/placeholder.svg",
				    	"alt": "Linear Equations in Two Variables (Practice Test)"
				    }
				}
                            },
                            "eng": {
                                "href": "/materials/practices/q1/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/practices/q1/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/practices/q1/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/practices/q1/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/practices/q1/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q2": {
                        "href": "/materials/practices/q2",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 2",
                        "children": {
                            "is": {
                                "href": "/materials/practices/q2/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/practices/q2/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/practices/q2/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/practices/q2/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/practices/q2/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/practices/q2/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/practices/q2/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q3": {
                        "href": "/materials/practices/q3",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 3",
                        "children": {
                            "is": {
                                "href": "/materials/practices/q3/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/practices/q3/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/practices/q3/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/practices/q3/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/practices/q3/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/practices/q3/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/practices/q3/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q4": {
                        "href": "/materials/practices/q4",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 4",
                        "children": {
                            "is": {
                                "href": "/materials/practices/q4/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/practices/q4/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/practices/q4/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/practices/q4/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/practices/q4/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/practices/q4/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/practices/q4/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    }
                }
            },
            "others": {        
                "href": "/materials/others",
                "src": "/icons/placeholder.svg",
                "alt": "Others",
                "children": {
                    "q1": {
                        "href": "/materials/others/q1",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 1",
                        "children": {
                            "is": {
                                "href": "/materials/others/q1/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/others/q1/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/others/q1/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/others/q1/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/others/q1/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/others/q1/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/others/q1/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q2": {
                        "href": "/materials/others/q2",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 2",
                        "children": {
                            "is": {
                                "href": "/materials/others/q2/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/others/q2/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/others/q2/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/others/q2/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/others/q2/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/others/q2/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/others/q2/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q3": {
                        "href": "/materials/others/q3",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 3",
                        "children": {
                            "is": {
                                "href": "/materials/others/q3/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/others/q3/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/others/q3/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/others/q3/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/others/q3/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/others/q3/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/others/q3/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    },
                    "q4": {
                        "href": "/materials/others/q4",
                        "src": "/icons/placeholder.svg",
                        "alt": "Quarter 4",
                        "children": {
                            "is": {
                                "href": "/materials/others/q4/is",
                                "src": "/icons/placeholder.svg",
                                "alt": "Integrated Science"
                            },
                            "math": {
                                "href": "/materials/others/q4/math",
                                "src": "/icons/placeholder.svg",
                                "alt": "Mathematics"
                            },
                            "eng": {
                                "href": "/materials/others/q4/eng",
                                "src": "/icons/placeholder.svg",
                                "alt": "English"
                            },
                            "fil": {
                                "href": "/materials/others/q4/fil",
                                "src": "/icons/placeholder.svg",
                                "alt": "Filipino"
                            },
                            "ss": {
                                "href": "/materials/others/q4/ss",
                                "src": "/icons/placeholder.svg",
                                "alt": "Social Science"
                            },
                            "cs": {
                                "href": "/materials/others/q4/cs",
                                "src": "/icons/placeholder.svg",
                                "alt": "Computer Science"
                            },
                            "es": {
                                "href": "/materials/others/q4/es",
                                "src": "/icons/placeholder.svg",
                                "alt": "Earth Science"
                            }
                        }
                    }
                }
            }     
        }
    }
};
