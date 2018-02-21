class Api::V1::PhotographersController < ApplicationController



  def index
    @photographers = Photographer.all
    render json:  @photographers
  end


  def show
    @photographer = Photographer.find(params[:id])
    @photos = @photographer.photos
    render json:  {photographer: @photographers, photos: @photos}
  end


end
