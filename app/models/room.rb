class Room < ApplicationRecord
  validates :name, :moderator, presence: true
  validates :name, uniqueness: true
end
