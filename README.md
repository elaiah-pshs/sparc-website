# Welcome to SPARC!

Welcome to the SPARC 2028 repository, contributor! This page shall teach you how to write and publish your contributions to our website.

## Basic Edition
1. Writing
	* The easiest way to write your contributions is via [StackEdit](https://stackedit.io/), an online text editor. StackEdit uses markdown to format text, and you can learn markdown [here](https://www.markdowntutorial.com/). StackEdit also has some very useful features that you would not find in an ordinary markdown editor, such as formulas (KaTeX), tables, and diagrams (UML). Once you are done writing, export the material as HTML by clicking the StackEdit icon at the upper right corner, then `Import/Export`, then `Export as HTML` and select `Plain HTML` as the template. Rename the file to `content.html`.

2. Uploading
	* To upload your material, go to `static/materials`, then navigate to the supposed folder where your material should go. For example, if you are uploading the reviewer for "The Sun" (IS Q1 Lesson 1), you must navigate to `static/materials/reviewers/q1/is/the_sun` and upload your material to this folder. If the folder does not exist, create a folder in your device with the same name, then upload that folder into its parent folder. For example, if `the_sun` folder does not exist, put `content.html` in a folder named `the_sun` in your device, then upload this folder to `static/materials/reviewers/q1/is`. Make sure there are no spaces in the names of your folders.

3. Publishing
	* Once you have uploaded your material, you must publish it to the website. Go to `src/scripts` and edit `pages.js`. Search for the entry with an `href` starting with `/materials`, followed by the path to the parent folder of your material. In our example, we are looking for the entry with `"href: "/materials/reviewers/q1/is"` . Then, add your material to the `children` attribute of this entry. You may make the attribute yourself if it is not already present beforehand. In the case of our example, we publish the material as follows:
		```json
		...
		"is": {
		    "href": "/materials/reviewers/q1/is",
            "src": "/icons/placeholder.svg",
            "alt": "Integrated Science",
			
			// add this
		    "children": {
		        "the_sun": {
		            "href": "/materials/reviewers/q1/is/the_sun",
		            "src": "/icons/placeholder.svg",
		            "alt": "The Sun",
		        }
			}
		}
		...
		```


And there you go! You now know how to publish materials into the website. If you have any questions, you may ask any of the heads or Kuya Meds.


## Going Beyond
The HTML file you export from StackEdit can already be published to the website. However, if you want to take things a step further, you can customize the material by writing your own HTML on the export. Just be sure not to make any `head` or `style` elements in the file, as this will affect the entire page. If you want to add custom styles to your material, follow these steps:

1. Wrap all the HTML in a `div` with a class name equal to the path to the material but with dashes instead of slashes:
	```html
	<div class="reviewers-q1-is-the_sun">
		<!-- insert material here -->
	</div>
	```
2. In `src/styles/custom`, create a new sass file with the class name of the div from step 1 as its filename. In this case, the file will be named `"reviewers-q1-is-the_sun.scss"`.
3. Create a selector targetting the `div` from step 1, then nest all of yourr styles in this rule:
	```sass
	.reviewers-q1-is-the_sun {
		// your styles here
	}
	```
4. Import this file in `root.scss`
	```sass
	...
	@use "custom/reviewers-q1-is-the_sun";
	...
	```

If you want to do something not tackled in this page (e.g., creating materials using svelte components instead of plain HTML), please consult with one of the heads first.
