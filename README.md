-You are required to implement the UI below using create react app or NextJS and the corresponding API using NodeJs.

- Each item in the grid is a post containing an image and a university name
- You should create an API to fetch dummy posts to be displayed
- When a user types an input(university name) in the search field, filter the list to show only matching posts

This is the BackEnd in Node

Got a List of Universities from http://universities.hipolabs.com/search

Got a list of University related pictures from pexels

Endpoints

/university : Returns a list of universities and photos
{
success: true,
universities=[]
photos: []
}
