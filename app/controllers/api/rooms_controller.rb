class Api::RoomsController < ApplicationController
  def index
    # if current_user
    if user = User.first
      @rooms = user.rooms.includes(:moderator)
    else
      render json: ["you are not logged in"], status: 401
    end
  end

  def create
    debugger
  end
end
