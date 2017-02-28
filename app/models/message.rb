class Message < ApplicationRecord
  validates :author, :room, :message, presence: true

  belongs_to :author, class_name: "User"
  belongs_to :room
end
