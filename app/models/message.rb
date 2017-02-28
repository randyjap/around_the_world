class Message < ApplicationRecord
  validates :author, :room, :message, presence: true
end
