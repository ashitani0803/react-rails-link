# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Link.create!(title: "test1", url: "#", status: 0)
Link.create!(title: "test2", url: "#", status: 1)
Link.create!(title: "test3", url: "#", status: 2)

Tag.create(name: "sample1")
Tag.create(name: "sample2")
Tag.create(name: "sample3")

TagLink.create(link_id: 1, tag_id: 1)
TagLink.create(link_id: 1, tag_id: 2)
TagLink.create(link_id: 1, tag_id: 3)